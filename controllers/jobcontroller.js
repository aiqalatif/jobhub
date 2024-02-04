const job = require("../modules/job");



module.exports={
    createJob:async (req,res)=>{
        const newJob=new job(req.body);
    

        try {
         await   newJob.save();

         res.status(201).json({status:true,message:'connection stablish'});
        } catch (error) {
             res.status(500).json(err);
        }
    },
    updateJob:async (res,req)=>{
      const  jobId=req.param.Id;
      const update=req.body;


      try {
        const updateJob=await job.findByIdUpdate(jobId,update,{new:true});

        if(!update){
            return res.status(404).json({status:false,message:'job not found'});
        }
        res.status(200).json({status:false,message:'job  founded'});
      } catch (error) {
        res.status(500).json(err)
      }
    },
    deleteJob:async (res,req)=>{
        const  jobId=req.param.Id;
        
  
  
        try {
          const deleteJobJob=await job.findByIdAndDelete(jobId);
  
          res.status(200).json({status:false,message:'job delete successful'});
        } catch (error) {
          res.status(500).json(err)
        }
      },
      getJob:async (res,req)=>{
        const  jobId=req.param.Id;
        
  
  
        try {
          const getJo=await job.findByIdAndDelete({_id:jobId},{createdAt:0,updateJob:0,__v:0});
  
          res.status(200).json(job);
        } catch (error) {
          res.status(500).json(err)
        }
      },
      

};