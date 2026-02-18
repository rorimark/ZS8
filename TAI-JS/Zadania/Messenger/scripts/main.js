const folders = [
  {
    name: "All Chats",
    icon: "./images/chat.png",
  },
  {
    name: "folder1",
    icon: "./images/folder.png",
  },
  {
    name: "folder2",
    icon: "./images/folder.png",
  },
];

const chats = [
  { name: "Jolka", profilePhoto: "./images/Jolka.jpg" },
  { name: "Krzysiek", profilePhoto: "./images/Krzysiek.jpg" },
];

async function render() {
  try {
    await foldersRender(folders);
  } catch (err) {
    console.error("Folders rendering error:", err);
  }

  try {
    await chatsRender(chats);
  } catch (err) {
    console.error("Chats rendering error", err);
  }

  console.log("Render is done✅");
}

render();

function foldersRender(foldersArr) {
  const foldersBar = document.querySelector(".folders");

  foldersArr.forEach((folder) => {
    const divCont = document.createElement("div");
    const imgIcon = document.createElement("img");
    const spanName = document.createElement("span");

    imgIcon.className = "folder-icon";
    imgIcon.src = folder.icon;

    spanName.className = "folder-name";
    spanName.innerText = folder.name;

    divCont.className = "folder";
    divCont.appendChild(imgIcon);
    divCont.appendChild(spanName);

    foldersBar.appendChild(divCont);
  });
}

function chatsRender(chatsArr) {
  const chatsBar = document.querySelector(".chats");

  chatsArr.forEach((chat) => {
    const divCont = document.createElement("div");
    const imgIcon = document.createElement("img");
    const spanName = document.createElement("span");

    imgIcon.className = "chat-pic";
    imgIcon.src = chat.profilePhoto;

    spanName.className = "chat-name";
    spanName.innerText = chat.name;

    divCont.className = "chat";
    divCont.appendChild(imgIcon);
    divCont.appendChild(spanName);

    chatsBar.appendChild(divCont);
  });
}
