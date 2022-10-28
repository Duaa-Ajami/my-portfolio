const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);
params.forEach((value, key) => {
    if(key=="Date of Birth")
    paragraph.append(`${key} : ${new Date(value).getUTCDate()+' - '+(new Date(value).getMonth()+1)+' - '+new Date(value).getFullYear()}`);
    else if(key=="The type of loan required"){
        var text="";
        switch(value){
            case "1":text="Annual interest savings account 5 %";
            break;
            case "2":text="Current account";
            break;
            case "3":text=" Annual interest education loan 10%";
            break;
            case "4":text="Home loan at annual interest 11% ";
            break;
            case "5":text="Commercial loan at annual interest 18%";
            break;
            case "6":text="Agricultural loan at annual interest 14% ";
            break;
            case "7":text="Annual interest transfer loan 12%";
            break;
            case "8":text="Workshop loan at annual interest 14%";
            break;
            
                }
                paragraph.append(`${key} : ${text}`);
    }
    else
    paragraph.append(`${key} : ${value}`);
    paragraph.append(document.createElement('br'));
    paragraph.append(document.createElement('br'));
});
