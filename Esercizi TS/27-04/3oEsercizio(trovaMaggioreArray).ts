let A:number[] = [1,5,20,15,500,230];

console.log("Il numero maggiore all'interno dell'array è: " + trovaMaggiore(A));

function trovaMaggiore (A:number[]) : number{

	let l:number = A.length;

	let k:number = A[0];

	for( let i = 0; i<l ; i++){

		if(k < A[i])
			k = A[i];

	}

	return k;

}
