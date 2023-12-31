const inputKey=document.getElementById("inputKey");
const inputValue=document.getElementById("inputValue");
const btnInsert=document.getElementById("btnInsert");
const IsOutput=document.getElementById("IsOutput");
const deleteAllBtn=document.getElementById("deleteAllBtn");
const btnAllDelete=document.getElementById("btnAllDelete");
const autoFILL=document.getElementById("autoFILL");
const btnReadData=document.getElementById("btnReadData");
const inputReadDataKey=document.getElementById("inputReadDataKey");
const readedData=document.getElementById("readedData");
const inputDelKey=document.getElementById("inputDelKey");
const btnDelete=document.getElementById("btnDelete");


btnInsert.onclick=function(){
    const key=inputKey.value;
    const value=inputValue.value;

    if(key && value){
        localStorage.setItem(key, value);
        window.location.reload();
    }else{
        alert("Must Enter value")
    }
};

if(localStorage.length==0){
    btnAllDelete.style.display="none";
    autoFILL.innerHTML+=`Add some key-value records using INSERT box`;
    document.getElementById("avialRecords").style.display="none";
}

if (localStorage != 0){
    document.getElementById("avialRecords").innerHTML += `<br>Records available in LocalStorage`;
}

for (let index = 0; index < localStorage.length; index++) {
    const key=localStorage.key(index);
    const value=localStorage.getItem(key);
    
    IsOutput.innerHTML += `
    <hr><br>
    Key is:${key} <br>
    Value is:${value}<br><br>
    `;
}

//Delete all the records
btnAllDelete.onclick=function(){
    localStorage.clear();
    window.location.reload();
};

//Display single record

btnReadData.onclick=function(){
    const inputReadDataKeyNew=inputReadDataKey.value;
    const readedData=localStorage.getItem(inputReadDataKeyNew);

    if(inputReadDataKeyNew){
        readedDataHere.innerHTML = `Data Value of requested KEY is: ${readedData}`;
    }
};

//Delete Single Records
btnDelete.onclick=function(){
    const inputDelKeyData=inputDelKey.value;

    if(inputDelKeyData){
        localStorage.removeItem(inputDelKeyData);
        location.reload();
    }
};