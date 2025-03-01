
function addClick(id,y){
    const element = document.getElementById(id);
    element.addEventListener('click',function(){
        alert("Board Updated Sucessfully");
     element.setAttribute('disabled', true);
     const totalTask = getInnerTextByID("total-task");
     const task = totalTask-1;
     if(totalTask == 1){
        alert("Congrates!You have completed all the task")
     }
     setInnerTextByIDandValue("total-task",task)
     const mark = getInnerTextByID("mark");
     
     const marks = mark + 1;
     console.log(marks);
     setInnerTextByIDandValue("mark",marks)
      const activities = document.getElementById("activities");
      const x = getHeading(y);
        const p = document.createElement("p");
        p.innerText = `You have Complete The Task ${x}`
        activities.appendChild(p)
        p.style.backgroundColor = "#F4F7FF";
        p.style.padding="6px";
        p.style.marginTop='14px';
        p.style.borderRadius="12px"
        p.style.textAlign="center"
       

}
    )
}
 addClick("completed","heading1")
 addClick("cloudsync","heading2")
 addClick("swiftpay","heading3")
 addClick("google","heading5");
 addClick("meta","heading4");
 addClick("btn","heading6")


