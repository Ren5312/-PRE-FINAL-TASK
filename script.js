function getInputData(){

let input = document.getElementById("numbers").value;

if(input.trim() === ""){
alert("Please enter numbers.");
return null;
}

return input.split(",").map(Number);
}


// Bubble Sort
function bubbleSort(arr){
let a=[...arr];

for(let i=0;i<a.length;i++){
for(let j=0;j<a.length-i-1;j++){
if(a[j] > a[j+1]){
[a[j],a[j+1]]=[a[j+1],a[j]];
}
}
}

return a;
}


// Selection Sort
function selectionSort(arr){
let a=[...arr];

for(let i=0;i<a.length;i++){
let min=i;

for(let j=i+1;j<a.length;j++){
if(a[j] < a[min]){
min=j;
}
}

[a[i],a[min]]=[a[min],a[i]];
}

return a;
}


// Insertion Sort
function insertionSort(arr){
let a=[...arr];

for(let i=1;i<a.length;i++){
let key=a[i];
let j=i-1;

while(j>=0 && a[j] > key){
a[j+1]=a[j];
j--;
}

a[j+1]=key;
}

return a;
}


// Merge Sort
function mergeSort(arr){
if(arr.length<=1) return arr;

let mid=Math.floor(arr.length/2);
let left=mergeSort(arr.slice(0,mid));
let right=mergeSort(arr.slice(mid));

return merge(left,right);
}

function merge(left,right){
let result=[];

while(left.length && right.length){
if(left[0] < right[0]){
result.push(left.shift());
}else{
result.push(right.shift());
}
}

return result.concat(left,right);
}


// Quick Sort
function quickSort(arr){
if(arr.length<=1) return arr;

let pivot=arr[arr.length-1];
let left=[];
let right=[];

for(let i=0;i<arr.length-1;i++){
if(arr[i] < pivot){
left.push(arr[i]);
}else{
right.push(arr[i]);
}
}

return [...quickSort(left), pivot, ...quickSort(right)];
}


// Run Sorting
function runSort(){

let data = getInputData();
if(!data) return;

let bubble = bubbleSort(data);
let selection = selectionSort(data);
let insertion = insertionSort(data);
let merge = mergeSort([...data]);
let quick = quickSort([...data]);

document.getElementById("output").innerHTML = `
<h3>Original Dataset:</h3>
${data}

<h3>Sorted Results:</h3>

Bubble Sort: ${bubble}<br><br>
Selection Sort: ${selection}<br><br>
Insertion Sort: ${insertion}<br><br>
Merge Sort: ${merge}<br><br>
Quick Sort: ${quick}
`;
}
