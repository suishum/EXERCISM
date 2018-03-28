class Transcriptor {
  toRna(nucleotide) {
    const convert = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    };
    const convertArr = nucleotide.split('');
    const resultArr = [];
    for (let i=0; i<resultArr.length; i++) {
      if (resultArr[i] !== Object.keys(convert)) {
        throw 'Invalid input DNA.' //make constructor?
      }
    }
    convertArr.forEach((nucleotide) => {
      resultArr.push(convert[nucleotide]);
    });
    const result = resultArr.join('');
    return result;
  }
}



export default Transcriptor
