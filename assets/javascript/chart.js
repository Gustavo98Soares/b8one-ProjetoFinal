/*-------- Chart Sales --------*/

const ctxSales =document.getElementById("chart-sales");

const chartSales = new Chart (ctxSales, {
type: 'line',
data: {
    labels: ["06/10/2021","07/10/2021","08/10/2021","09/10/2021","10/10/2021","11/10/2021","12/10/2021",],   
    datasets:[
    {
        label: "Estornado",
        data: [0,40,35,50,35,30,25,200],  
        borderColor: "#425DC7",
        backgroundColor: "#425DC7"
       
    },
    {
        label: "Cancelado",
        data: [0,49,25,50,35,30,25,200],
        borderColor: "#F03460",
        backgroundColor: "#F03460"
    },
    {
        label: "Não Pago",
        data: [0,40,35,50,35,30,25,200],
        borderColor: "#FFBE00",
        backgroundColor:"#FFBE00"
    },
    {
        label: "Pago",
        data: [0,43,35,80,35,40,25,20],
        borderColor: "#2EB042",
        backgroundColor: "#2EB042"
    },         
]
},
options:{
    plugins: {
        legend: {
            position: "bottom",
            align: "start",
            labels: {
              usePointStyle: true,
            },
        },
    },                 
} ,          
});

/*-------- Chart Requests --------*/

const ctxRequests =document.getElementById("chart-requests");

const chartRequests = new Chart (ctxRequests, {
type: 'line',
data: {
    labels: ["06/10/2021","07/10/2021","08/10/2021","09/10/2021","10/10/2021","11/10/2021","12/10/2021",],   
    datasets:[     
    {
        label: "Total de pedidos",
        data: [0,40,35,50,35,30,25,200],  
        borderColor: "#425DC7",
        backgroundColor: "#425DC7"
       
    },           
]
},
options:{
    plugins: {
        legend: {
            position: "bottom",
            align: "start",
            labels: {
              usePointStyle: true,
            },
        },
    },                 
} ,          
});

/*-------- Chart Resellers --------*/

const ctxResellers =document.getElementById("chart-resellers");

const chartResellers = new Chart (ctxResellers, {
type: 'line',
data: {
    labels: ["06/10/2021","07/10/2021","08/10/2021","09/10/2021","10/10/2021","11/10/2021","12/10/2021",],   
    datasets:[
        {
            label: "Valor total de vendas",
            data: [0,40,35,50,35,30,25,200],  
            borderColor: "#425DC7",
            backgroundColor: "#425DC7"
           
        },
        {
            label: "Quantidade de pedidos",
            data: [0,49,25,50,35,30,25,200],
            borderColor: "#F03460",
            backgroundColor: "#F03460"
        },
        {
            label: "Comissão a pagar",
            data: [0,40,35,50,35,30,25,200],
            borderColor: "#FFBE00",
            backgroundColor:"#FFBE00"
        },     
]
},
options:{
    plugins: {
        legend: {
            position: "bottom",
            align: "start",
            labels: {
              usePointStyle: true,
            },
        },
    },                 
} ,          
});
