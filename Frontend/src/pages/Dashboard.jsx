import Card from "../components/Card";
import Button from "../components/Button";

const Dashboard = () => {

  return (

    <div className="grid gap-6">


        <div className="flex flex-col gap-3 rounded-3xl bg-white/85 px-6 py-4 shadow-xl shadow-slate-200/60 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Overview
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Monitor student performance and AI predictions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button text="View Students" to="/students" variant="secondary" />
            <Button text="Run Prediction" to="/prediction" />
          </div>
        </div>


        <div className="grid gap-6 md:grid-cols-4">


          <Card>

            <h3 className="text-slate-500">
              Total Students
            </h3>

            <p className="text-3xl font-bold text-indigo-600 mt-3">
              120
            </p>

          </Card>




          <Card>

            <h3 className="text-slate-500">
              Predictions
            </h3>

            <p className="text-3xl font-bold text-indigo-600 mt-3">
              95
            </p>

          </Card>




          <Card>

            <h3 className="text-slate-500">
              Average Grade
            </h3>

            <p className="text-3xl font-bold text-indigo-600 mt-3">
              78%
            </p>

          </Card>




          <Card>

            <h3 className="text-slate-500">
              At Risk Students
            </h3>

            <p className="text-3xl font-bold text-red-500 mt-3">
              12
            </p>

          </Card>



        </div>





        {/* Recent Students */}

        <Card className="p-0">

          <div className="border-b border-slate-100 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-900">
              Recent Students
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Latest activity and current student status.
            </p>
          </div>

          <div className="overflow-x-auto px-6 py-5">


            <table className="w-full text-left">


              <thead>

                <tr className="border-b border-slate-100 text-slate-500">

                  <th className="py-3">
                    Name
                  </th>


                  <th>
                    Attendance
                  </th>


                  <th>
                    Grade
                  </th>


                  <th>
                    Status
                  </th>


                </tr>

              </thead>




              <tbody>


                <tr className="border-b border-slate-100">

                  <td className="py-4">
                    Kasun Perera
                  </td>

                  <td>
                    90%
                  </td>

                  <td>
                    A
                  </td>

                  <td className="text-green-600">
                    Good
                  </td>

                </tr>



                <tr className="border-b border-slate-100">

                  <td className="py-4">
                    Nimal Silva
                  </td>

                  <td>
                    65%
                  </td>

                  <td>
                    C
                  </td>

                  <td className="text-red-500">
                    Needs Support
                  </td>

                </tr>



              </tbody>



            </table>


          </div>



        </Card>


    </div>

  );

};


export default Dashboard;