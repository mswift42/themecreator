package themecreator

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestIntellijThemeHandler(t *testing.T) {
	resp := httptest.NewRecorder()
	uri := "/intellij"
	req, err := http.NewRequest("GET", uri, nil)
	if err != nil {
		t.Fatal(err)
	}
	bodystrings := []string{"option", "LINE_SPACING"}
	http.DefaultServeMux.ServeHTTP(resp, req)
	if p, err := ioutil.ReadAll(resp.Body); err != nil {
		t.Fail()
	} else {
		if strings.Contains(string(p), "Error") {
			t.Errorf("header response shouldn't return error :%s", p)
		}
		for _, i := range bodystrings {
			if !strings.Contains(string(p), i) {
				t.Errorf("header response doesn't match: \n%s", p)
			}
		}
	}

}
