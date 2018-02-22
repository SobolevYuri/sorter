class Sorter {
  constructor() {
  this.arr=[];
  this.method=null;
  }

  add(element) {
   this.arr.push(element);
  }

  at(index) {
   return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort();
    var newr=new Array();
    for(let i=0;i<indices.length;i++)
    {
newr.push(this.arr[indices[i]]);
    }

    if(this.method==null){
      newr.sort(function(l, r) {
        return l - r;});
    }
    else{  
      newr.sort(this.method);
    }
    
    for(let i=0;i<indices.length;i++)
    {
this.arr[indices[i]]=newr[i];
    }
  }

  setComparator(compareFunction) {
    this.method=compareFunction;
  }
}

module.exports = Sorter;