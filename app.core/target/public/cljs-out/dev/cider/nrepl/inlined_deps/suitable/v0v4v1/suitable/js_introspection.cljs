(ns ^{:mranderson/inlined true} cider.nrepl.inlined-deps.suitable.v0v4v1.suitable.js-introspection
  (:require [clojure.string :refer [starts-with?]]
            [goog.object :refer [get] :rename {get oget}]))

(def own-property-descriptors
  (if (js-in "getOwnPropertyDescriptors" js/Object)
    ;; ES 6+ version
    (fn [obj] (js/Object.getOwnPropertyDescriptors obj))
    ;; ES 5.1 version
    (fn [obj] (->> obj
                   js/Object.getOwnPropertyNames
                   (map (fn [key] [key (js/Object.getOwnPropertyDescriptor obj key)]))
                   (into {})
                   clj->js))))

(defn properties-by-prototype
  ""
  [obj]
  (loop [obj obj protos []]
    (if obj
      (recur
       (js/Object.getPrototypeOf obj)
       (conj protos {:obj obj :props (own-property-descriptors obj)}))
      protos)))

(defn property-names-and-types
  ([js-obj] (property-names-and-types js-obj nil))
  ([js-obj prefix]
   (let [seen (transient #{})]
     (for [[i {:keys [_obj props]}] (map-indexed vector (properties-by-prototype js-obj))
           key (js-keys props)
           :when (and (not (get seen key))
                      (or (empty? prefix)
                          (starts-with? key prefix)))]
       (let [prop (oget props key)]
         (conj! seen key)
         {:name key
          :hierarchy i
          :type (try
                  (if-let [value (or (oget prop "value")
                                     (-> prop (oget "get")
                                         (apply [])))]
                    (if (fn? value) "function" "var")
                    "var")
                  (catch js/Error _e "var"))})))))

(comment
  (require '[cljs.pprint :refer [pprint]])
  ;; (-> js/console property-names-and-types pprint)
  (-> js/document.body property-names-and-types pprint)

  (let [obj (new (fn [x] (this-as this (goog.object/set this "foo" 23))))]
    (pprint (property-names-and-types obj)))

  (oget js/console "log")
  (-> js/console property-names-and-types pprint)
  (-> js/window property-names-and-types pprint))
