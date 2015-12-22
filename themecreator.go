package themecreator

import (
	"bytes"
	"net/http"
	"text/template"
)

func selectedColors(r *http.Request) map[string]string {
	facesmap := make(map[string]string)
	themevariables := []string{"mainbg", "mainfg", "fg2", "fg3", "fg4",
		"bg2", "bg3", "keyword", "string", "functionname",
		"variable", "type", "constant", "comment", "warning",
		"warning2", "themename", "author"}
	for _, i := range themevariables {
		facesmap[i] = r.FormValue(i)
	}
	return facesmap
}
func init() {
	http.HandleFunc("/intellij", intellijThemeHandler)
	http.HandleFunc("/tmtheme", textmateThemeHandler)
}

func saveThemeHandler(w http.ResponseWriter, r *http.Request, tmplfile, tmplname string) {
	fmap := selectedColors(r)
	var res bytes.Buffer
	themetemplate := template.Must(template.New(tmplname).ParseFiles(tmplfile))
	if err := themetemplate.ExecuteTemplate(&res, tmplname, fmap); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Content-Type", "")
	w.Write(res.Bytes())

}

func intellijThemeHandler(w http.ResponseWriter, r *http.Request) {
	saveThemeHandler(w, r, "intellij.txt", "intellij")
}

func textmateThemeHandler(w http.ResponseWriter, r *http.Request) {
	saveThemeHandler(w, r, "tmtheme.txt", "textmate")
}
