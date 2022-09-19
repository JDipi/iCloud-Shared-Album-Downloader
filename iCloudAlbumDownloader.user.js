// ==UserScript==
// @name         iCloud Album Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Downloads iCloud Albums
// @author       _John#1218
// @supportURL   https://github.com/JDipi/iCloud-Shared-Album-Downloader/issues
// @match        https://www.icloud.com/sharedalbum/
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=icloud.com
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_info
// ==/UserScript==

/***************** IMPORTANT!!! ********************
For this script to work properly, do the following:
  1) Go to your Tampermonkey dashboard
  2) Click settings
  3) Change the 1st option (Config Mode) to "Advanced"
  4) Scroll down to "Downloads BETA"
  5) Change "Download Mode" to "Browser API"
  6) Save and exit, accept the new "Manage Download"
     permission if prompted.
Doing this allows Tampermonkey to save the images to a
folder in your default download location, rather than
just spewing all the images out.
**************************************************/

(function() {
    let errors

    function download(data) {
        let errors = 0
        let done = 0
        data.forEach(el => {
            let name = $('span.title').text() + "/" + (data[1].url.split("?")[0]).split("/").pop()
            GM_download({
                url: el.url,
                name,
                onload: () => {
                    done += 1
                    console.log(`%cDownloading [${done}/${data.length}]`, 'color:blue')
                },
                onerror: (e) => {
                    done += 1
                    errors += 1
                    console.log(`%cError for image [${done}/${data.length}]: ${e.error}\n(${el.url})`, 'color:red')
                },
                ontimeout: () => {
                    done += 1
                    errors += 1
                    console.log(`%cImage [${done}/${data.length}] timed out\n(${el.url})`, 'color:red')
                }
            })
        })
    }

    document.addEventListener('keyup', (e) => {
        if (e.ctrlKey && e.key === 'q') {

        if (GM_info.downloadMode !== "browser") {
            alert(`Please change the Tampermonkey download mode to browser and read the important comment at the top of the script!!!`)
            return
        }
            let albumID = window.location.href.split('#')[1]
            let response
            GM_xmlhttpRequest({
                method: 'GET',
                url: `https://icloud-album-downloader.herokuapp.com/api/${albumID}`,
                onload: (res) => {
                    response = JSON.parse(res.responseText)
                    if (!confirm(`You are about to download ${response.length} images. Continue?`)) return
                    download(response)
                }
            })
        }
    });
})();
