export const predictStudent = async(req,res)=>{


    const {
        attendance,
        studyHours,
        assignmentScore,
        previousGrade
    } = req.body;



    // temporary prediction

    const prediction =
    (
        attendance +
        studyHours*5 +
        assignmentScore +
        previousGrade
    ) / 4;



    let level="Average";


    if(prediction >= 80){

        level="Excellent";

    }
    else if(prediction < 50){

        level="At Risk";

    }



    res.json({

        predictedGrade:prediction.toFixed(2),

        performanceLevel:level

    });


};