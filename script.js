function updateTimer() {
  const date = new Date("April 12, 2026 11:30:00").getTime();
  const now = new Date().getTime();
  const diff = date - now;

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));

  document.getElementById("timer").innerText =
    `Wedding in: ${d}d ${h}h ${m}m`;
}

setInterval(updateTimer,1000);

function openCard(){
  document.getElementById("popup").style.display="block";
}

function closeCard(){
  document.getElementById("popup").style.display="none";

  const toast = document.getElementById("toast");
  toast.style.display="block";

  setTimeout(()=>{
    toast.style.display="none";
  },3000);
}
