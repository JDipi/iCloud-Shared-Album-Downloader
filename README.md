# iCloud-Shared-Album-Downloader
## By JDipi
### Credit to [@cvscarlos](https://github.com/cvscarlos)'s [iCloud API](https://github.com/cvscarlos/iCloud-Album-Downloader/blob/gh-pages/index.html#L27), which is based off of [ICloud-Shared-Album](https://github.com/ghostops/ICloud-Shared-Album) by [@ghostops](https://github.com/ghostops)
___
Downloads public iCloud shared albums


___
## [How to install tampermonkey](https://www.youtube.com/watch?v=kjeERqWY04s)
___
Make sure to do the following after you install tampermonkey, or else your default download directory will be flooded with image files when you try to download an album:

  1) Go to your Tampermonkey dashboard
  2) Click settings
  3) Change the 1st option (Config Mode) to "Advanced"
  4) Scroll down to "Downloads BETA"
  5) Change "Download Mode" to "Browser API"
  6) Save and exit, accept the new "Manage Download" 
     permission if prompted.
___
### Usage

### 1. After installation of Tampermonkey and the userscript, navigate to whatever iCloud album you want to download. 

  - *NOTE: this will only download albums that have the "Public Website" setting enabled.*

  - <img src="https://user-images.githubusercontent.com/48573618/190949429-12cbf4fd-bf95-4d70-bc8c-d7f9e956ab1d.png" height="400" />

### 2. Once you are on the iCloud album page, press <kbd>Ctrl</kbd> + <kbd>Q</kbd> to begin downloading.

  - *NOTE: depending on the size of the album, there may be a delay between when you press the key combo and when the confirmation window pops up.*

  - <img src="https://user-images.githubusercontent.com/48573618/190949667-f5746b84-0f4e-4ddb-8ec2-d1b253c576f5.png" width="400" />

### 3. To see download progress and errors, open the developer console by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>
   - <img src="https://user-images.githubusercontent.com/48573618/190950719-912219ee-cdeb-4c09-abc0-ca2675a83e05.png" width="400" />
   
### 4. Once the download is complete, navigate to your default download directory. The media will be in a self-titled folder.
   - <img src="https://user-images.githubusercontent.com/48573618/190951299-d41c5788-8035-422b-b48c-d5f915d987ae.png" width="150" />
