const dbConnect=require('./mongodb')

const insert=async()=>{
   const db=await dbConnect();
     const result=db.insertMany(
        // { name:'V20',brand:'Vivo',price:230,category:'Mobiles' }
        [
             { name:'Max1',brand:'Micromax',price:230,category:'Mobiles' },
              { name:'Max2',brand:'Micromax',price:330,category:'Mobiles' },
               { name:'Max3',brand:'Micromax',price:430,category:'Mobiles' }
        ]
    )
}
insert();