

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
    
};
function inform() {
    let cood = document.getElementById("md").value,
        user = document.getElementById("ma").value;
    if (cood == 2573) {
        document.write(`
        <div style="
        display: flex;
        color: #28656f;
        justify-content: center;
        font-size: 50px;
        margin-top: 170px;
        background: #ddd;">Hallo ${user}</div>
        <a href="./rami.html" style="
        background-color: whitesmoke;
        margin: 50px 263px;
        padding: 10px 30%;
        display: block;
        border: none;
        font-size: 40px;
        position: relative;
        border-radius: 2px;
        text-transform: uppercase;
        outline: none;
        text-decoration: none;
        box-shadow: 0 0 4px #999;
        cursor: pointer;">Next</a>
        `);
    } else {
        document.write("sorr no acount" + user);
    }

}




