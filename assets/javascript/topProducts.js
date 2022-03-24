async function fetchProducts() {
    const response = await fetch("https://test-final.b8one.academy/products/more-sold");
    const arrayProducts = await response.json();
    return arrayProducts   
}


async function populateProducts() {
    const productData = await fetchProducts();
    const arrayDataProducts = productData.products
    
    const tableGroupList = document.getElementById("top-selling-block__table");
    const productsTable = arrayDataProducts.map((item, index) => {
        return `
        <tr class="top-selling-block-table__trow">
                                <td class="top-selling-block-table__column">
                                    <div class="top-selling-block-table__column__container">
                                        <span class="top-selling-block-table__place">
                                            ${index + 1}
                                        </span>
                                        <img src="${item.image}" alt="${item.name}">
                                        <span class="top-selling-block-table__text">
                                            ${item.name}
                                        </span>
                                    </div>                                   
                                </td>
                                <td class="top-selling-block-table__column">
                                    <span class="top-selling-block-table__text">
                                        ${'#' + item.orderId}
                                    </span>
                                </td>
                                <td class="top-selling-block-table__column">
                                    <span class="top-selling__departament top-selling-block-table__text">
                                        ${item.department}
                                    </span>
                                </td>
                                <td class="top-selling-block-table__column">
                                    <span class="top-selling-block-table__text">
                                        ${(item.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                    </span>
                                </td>
                            </tr>            
        `
    })
    const tableHtml = productsTable.join(" ");
    tableGroupList.insertAdjacentHTML("beforeend", tableHtml)   
}

populateProducts()