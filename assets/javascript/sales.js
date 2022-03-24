async function fetchSales (){
    
    const response = await fetch ("https://test-final.b8one.academy/sales");   
    const salesData = await response.json(); 
    return salesData
}
fetchSales()

async function populateSales(){
    const dataSales = await fetchSales();

    const revenues = document.getElementById("revenues")
    revenues.innerHTML = (dataSales.revenues/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    
    const totalSales = document.getElementById("totalSales")
    totalSales.innerHTML = dataSales.totalSales;
    
    const averageTicket = document.getElementById("averageTicket")
    averageTicket.innerHTML = dataSales.averageTicket;    
   
}

populateSales()