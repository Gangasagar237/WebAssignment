const input=(e)=>{
    const comp=document.getElementById('wrote');
    const result=(e.target.value);
      comp.innerHTML=result;
}


document.getElementById('my-name').addEventListener('input',input);