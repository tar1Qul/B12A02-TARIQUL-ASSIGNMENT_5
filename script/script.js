function getElement(id) {
    return (element = document.getElementById(id));
}

getElement("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("cart-love")) {
        const hartCount = getElement("hart-count").innerText;
        const currentHartCount = Number(hartCount) + 1;
        getElement("hart-count").innerText = currentHartCount;
    }
});

getElement("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("call-btn")) {
        const callBtn = e.target;

        const coinCount = getElement("coin-count").innerText;
        if (coinCount <= 0) {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            return;
        }

        const cardTitle1 = callBtn.parentNode.parentNode.children[1].innerText;

        const cardTitle2 = callBtn.parentNode.parentNode.children[2].innerText;

        const phoneNumber = callBtn.parentNode.parentNode.children[3].innerText;

        alert(`
      📞 Calling ${cardTitle2} ${phoneNumber}...
        `);

        const currentCoinCount = Number(coinCount) - 20;

        getElement("coin-count").innerText = currentCoinCount;

        const callHistoryContainer = getElement("call-history-container");

        const currentDate = new Date().toLocaleTimeString();

        const newCallHistory = document.createElement("div");

        newCallHistory.innerHTML = `
                         <div
                class="flex items-center justify-between bg-[#fafafa] p-4 rounded-lg"
              >
                <div>
                  <h3 class="text-lg font-semibold">${cardTitle1}</h3>
                  <p class="text-lg font-medium text-[#5c5c5c]">${phoneNumber}</p>
                </div>
                <p class="text-lg font-medium">${currentDate}</p>
              </div> 
    
    `;
        callHistoryContainer.append(newCallHistory);
    }
});

getElement("history-clear").addEventListener("click", function () {
    const callHistoryContainer = getElement("call-history-container");
    callHistoryContainer.innerHTML = "";
});

getElement("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("copy-btn")) {
        const copyBtn = e.target;
        const phoneNumber = copyBtn.parentNode.parentNode.children[3].innerText;

        navigator.clipboard.writeText(phoneNumber);

        alert(`
        নম্বর কপি হয়েছে : ${phoneNumber}
        `)

        const copyCount = getElement("copy-count").innerText;

        const currentCopyCount = Number(copyCount) + 1;

        getElement("copy-count").innerText = currentCopyCount;


    }
});