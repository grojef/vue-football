/**
 * Created by kexiao on 16/11/27.
 */


const hasArrayEntry=(target,id)=>{

    const filter=(entry,id)=>{
        return  entry.id =id;
    }

   return target.find(filter(target,id));
}
