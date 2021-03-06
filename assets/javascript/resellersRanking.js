async function fetchRanking() {
    const response = await fetch("https://test-final.b8one.academy/resellers/ranking");
    const arrayRanking = await response.json();
    return arrayRanking
}

async function populateRanking() {
    const rankingData = await fetchRanking();
    const arrayDataRanking = rankingData.resellers
  
    
    const RankingList = document.querySelector('.resellers__ranking-list');
    const rankingTable = arrayDataRanking.map((item, index) =>
     {const percentRule = item.percentage
     console.log(percentRule);  {
        return `
            <li class="resellers__ranking-list__item">
            <span class="resellers__ranking-list__place">
                ${index + 1} 
            </span>
            <svg class="resellers__ranking-list__avatar" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
                <path d="M10.6847 26V14.3636H12.4403V19.4205H18.2415V14.3636H20.0028V26H18.2415V20.9261H12.4403V26H10.6847ZM22.5597 26V14.3636H26.7074C27.6089 14.3636 28.357 14.5189 28.9517 14.8295C29.5502 15.1402 29.9972 15.5701 30.2926 16.1193C30.5881 16.6648 30.7358 17.2955 30.7358 18.0114C30.7358 18.7235 30.5862 19.3504 30.2869 19.892C29.9915 20.4299 29.5445 20.8485 28.946 21.1477C28.3513 21.447 27.6032 21.5966 26.7017 21.5966H23.5597V20.0852H26.5426C27.1108 20.0852 27.5729 20.0038 27.929 19.8409C28.2888 19.678 28.5521 19.4413 28.7188 19.1307C28.8854 18.8201 28.9688 18.447 28.9688 18.0114C28.9688 17.572 28.8835 17.1913 28.7131 16.8693C28.5464 16.5473 28.2831 16.3011 27.9233 16.1307C27.5672 15.9564 27.0994 15.8693 26.5199 15.8693H24.3153V26H22.5597ZM28.304 20.75L31.179 26H29.179L26.3608 20.75H28.304Z" fill="#425DC7"/>
            </svg>
            <div class="resellers__ranking-list__info">
                <span class="resellers__ranking-list__name">
                    ${item.name}
                </span>
                <span class="resellers__ranking-list__total-orders">${item.ordersCount}<span class="ranking-list__total-orders__percent">${item.percentage}</span>
                    <svg class="ranking-list__total-orders__percent__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </span>
            </div>
        </li>                 
        `
      
    })
    const rankingHtml = rankingTable.join(" ");
    RankingList.insertAdjacentHTML("beforeend", rankingHtml);
}

populateRanking();
