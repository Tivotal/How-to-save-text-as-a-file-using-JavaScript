/* Created by Tivotal */

let textarea = document.querySelector("textarea");
let filenameInput = document.querySelector(".file-name input");
let selectMenu = document.querySelector(".save-as select");
let btn = document.querySelector(".btn");

//on user selected file format
selectMenu.addEventListener("change", () => {
  //getting user selected format
  let selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;

  //chaning button text accorind to selected option
  btn.innerText = `Save as ${selectedFormat.split(" ")[0]} file`;
});

//on button click
btn.addEventListener("click", () => {
  //creating new blob with textarea value and selected file format
  let blob = new Blob([textarea.value], { type: selectMenu.value });

  //creating temporary url for the blob
  let fileUrl = URL.createObjectURL(blob);

  //creating new a tag
  let link = document.createElement("a");

  //passing file name input value as download value for the link
  link.download = filenameInput.value;

  //passing temporary url to link
  link.href = fileUrl;

  //on link click, file will be downloaded
  link.click();
});
