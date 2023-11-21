const collection = new Set([1, 2, 3]);
const iterator = collection.values();
let timer = null;

const POLLING_TIME = 1000;

setInterval(() => {
  const lastNumber = [...collection].at(-1);
  collection.add(lastNumber+1);
}, POLLING_TIME);

function runInterator () {
  timer = setTimeout(() => {
    const { value, done } = iterator.next();

    if (done) {
      timer = null;
      return;
    }

    console.log(value);
    
    if (collection.size >= 5 ) {
      const [first,] = [...collection];
      
      if (first !== value) {
         collection.delete(first);
      }
    }
    
    runInterator();
  }, POLLING_TIME);
}

runInterator();

