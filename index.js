const progress=document.querySelector('.progress');
const progress_percentage=document.querySelector('.progress span');

let per=0;
function progressLoad(){
    if(per>=80){
        progress.style.width='80%';
        progress_percentage.innerHTML="80%"
    }
    else{
        progress.style.width= `${per}%`;
        progress_percentage.innerHTML=`${per}`;
    }
    per++
}
setInterval(progressLoad,90)