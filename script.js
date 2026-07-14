var zi = 3;
var selectedName = "about";
async function selectFolder(name) {
    if (selectedName == name) return;
    selectedName = name;
    folderView = document.getElementsByClassName(`folder-view`)[0];
    selectedFolder = document.getElementsByClassName(`folder ${name}`)[0];
    selectedTab = document.getElementsByClassName(`tab ${name}`)[0];

    folderView.style.transform = "translate(20vmax, 20vmax)";
    selectedFolder.style.transform = "translate(-100vmax, -100vmax)";
    selectedTab.style.transform = "translate(-100vmax, -100vmax)";
    await new Promise(r => setTimeout(r, 350));
    selectedFolder.style.zIndex = zi;
    selectedTab.style.zIndex = zi;
    folderView.style.transform = null;
    selectedFolder.style.transform = null;
    selectedTab.style.transform = null;
    zi++;
    document.cookie = `selectedName=${name}`;
}


async function load() {
    selectedName = document.cookie.split("=")[1] ?? "about";
    document.getElementsByClassName(`folder ${selectedName}`)[0].style.zIndex = zi;
    document.getElementsByClassName(`tab ${selectedName}`)[0].style.zIndex = zi;
    zi++;
}