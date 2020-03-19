userResult = document.createElement('p');

const form = document.querySelector('form');
form.append(userResult);

const inputVal = document.querySelector('#check');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputResult = inputVal.value;
    function convertToRoman(num) {
        const decimals =  [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000];
        const roman = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','M','MM','MMM','MMMM','MMMMM'];
        let resArr = [];
    
        function separateNumberIntoUnits(n) {
            if (n == 0) return [0];
            // n = Math.floor(n); // needed for decimal numbers
            var arr = [];
            var i = 1;
    
            while (n > 0) {
                arr.unshift((n % 10) * i);
                n = Math.floor(n / 10);
                i *= 10
            }
            return arr;
        }
    
        let breakNum = separateNumberIntoUnits(num);
    
        for(let i of breakNum) {
            let index = decimals.indexOf(i);
            resArr.push(roman[index]);
        }
    
        const strRes = resArr.join('');
        return strRes
    }

    userResult.innerText = convertToRoman(inputResult);
});
