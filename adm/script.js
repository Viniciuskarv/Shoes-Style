var ToView = window.document.getElementById('BtnToView')
var texth1 = window.document.getElementById('txth1')
var textP = window.document.getElementById('txtp')
var numValue =window.document.getElementById('NumberValue')
var CodValue = window.document.getElementById('Codevalue')
ToView.addEventListener('click', functionToView)

const validatToView = () => texth1.value.trim().length > 0;

function functionToView(){
    const txtvalid = validatToView();

    console.log(txtvalid);

    if (!txtvalid) {
        return texth1.classList.add("error");
    }
    
    var containerCard = document.getElementById('ContainerAddResu');//entrada
    //tags
    var containerResu = document.createElement('div');
    var infoH1 = document.createElement('h1');
    var infoP = document.createElement('p');
    var infovalue = document.createElement('p');



    //ADD ATRIBUTE
    containerResu.setAttribute("class","containerCard");
    containerResu.setAttribute("id",""+CodValue.value+"")
    infoH1.innerHTML=(texth1.value);
    infoP.innerHTML=(textP.value);
    infovalue.innerHTML=(numValue.value+"€");


    //TRANFERENCIA DE ITENS
    containerCard.appendChild(containerResu);
    containerResu.appendChild(infoH1);
    containerResu.appendChild(infoP);
    containerResu.appendChild(infovalue);

    //resetvalue
    texth1.value="";
    textP.value="";
    numValue.value="";
    CodValue.value="";
}
const handleInputChange = () => {
    const txtisvalid = validatToView();
        
    if (txtisvalid) {
        return texth1.classList.remove("error");
    }
};
texth1.addEventListener("change" , () => handleInputChange());
