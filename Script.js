//const n= rand;
const array = [];

function init(){

    let rand = Math.random()*30;
    rand = Math.floor(rand);
    
    
    for (let  i = 0; i< rand; i++){
        array[i]= Math.random();
    }
    showBars();
    
}

function showBars(){
    container.innerHTML="";
    for (let i = 0; i< array.length; i++){
        const bar = document.createElement("div");
        bar.style.height=  array[i]*100+"%";
        bar.classList.add("bar");
        container.appendChild(bar);
    }

}

function play(){
    const copy= [...array]
    const swaps = QuickSort(copy);
    console.log(swaps);
    animate(swaps);
}

function animate(swaps){

    if(swaps.length ==0){
        return;
    }

    const [i,j] = swaps.shift();
    [array[i],array[j]]= [array[j], array[i]];
    showBars();
    setTimeout(function(){
        animate(swaps);
    } ,50);
}

function BubbleSort(array){
    const swaps=[];

    do {
        var swapped = false;
        for (let i = 0; i< array.length; i++){
            if (array[i-1] > array[i]){
                swapped = true;
                swaps.push([i-1,i]);
                [array[i-1],array[i]] =[array[i], array[i-1]];
            }
        }
    } while(swapped);
    return swaps;
}




function QuickSort(array){
    let n = array.length; 
    QuickSortHelper(array, 0, n);

}

function QuickSortHelper(array,high, low){
    if (low < high){
        let pi = PartitionFunction(array, low, high);
        QuickSortHelper(array, low, pi-1);
        QuickSortHelper(array, pi +1 , high );
    }

}


function PartitionFunction(array, high, low){
    let pivot = array[high];
    let i = low-1;
    const swaps = [];


    for (let j= low; j <= high; j++){

        if (array[j]< pivot){
            i++;
            swaps.push([i,j]);
            [array[i], array[j]]= [array[j], array[i]]

        }
        [array[i+1], array[high]]= [array[high], array[i+1]];
    }
    return swaps;
}
