function readURL(input) 
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
        
        var bannerImage = document.getElementById('bannerImg');
        var imgData = getBase64Image(bannerImage);
        localStorage.setItem("imgData", imgData);
    }
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = "50%";
    canvas.height = "50%";

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    
    var dataImage = localStorage.getItem('imgData');
    bannerImg = document.getElementById('tableBanner');
    bannerImg.src = "data:image/png;base64," + dataImage;
    
}