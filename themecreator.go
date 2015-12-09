package themecreator

import (
	"net/http"
)

func selectedColors(r *http.Request) map[string]string {
	facesmap := make(map[string]string)
	themevariables := []string{"mainbg", "mainfg", "fg2", "fg3", "fg4",
		"bg2", "bg3", "keyword", "string", "functionname",
		"variable", "type", "constant", "comment", "warning",
		"warning2", "themename", "author"}

}
