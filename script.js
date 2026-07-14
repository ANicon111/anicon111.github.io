var zi = 3;
var selectedName = "about";
async function selectFolder(name) {
    if (selectedName == name) return;
    selectedName = name;
    folders = document.getElementsByClassName(`folder`);
    selectedFolder = document.getElementsByClassName(`folder ${name}`)[0];
    tabs = document.getElementsByClassName(`tab`);
    selectedTab = document.getElementsByClassName(`tab ${name}`)[0];

    for (i = 0; i < 3; i++) {
        folders[i].style.transform = "translate(20vw, 20vh)"
        tabs[i].style.transform = "translate(20vw, 20vh)"
    }
    selectedFolder.style.transform = "translate(-85vw, -85vh)";
    selectedTab.style.transform = "translate(-85vw, -85vh)";
    await new Promise(r => setTimeout(r, 350));
    selectedFolder.style.zIndex = zi;
    selectedTab.style.zIndex = zi;
    await new Promise(r => setTimeout(r, 50));
    for (i = 0; i < 3; i++) {
        folders[i].style.transform = "translate(0, 0)"
        tabs[i].style.transform = "translate(0, 0)"
    }
    zi++;
    document.cookie = `selectedName=${name}`;
}


async function load() {
    selectedName = document.cookie.split("=")[1] ?? "about";
    document.getElementsByClassName(`folder ${selectedName}`)[0].style.zIndex = zi;
    document.getElementsByClassName(`tab ${selectedName}`)[0].style.zIndex = zi;
    zi++;
}
