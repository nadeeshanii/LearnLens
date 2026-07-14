import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib


data=pd.read_csv("students.csv")


X=data[
[
"attendance",
"studyHours",
"assignmentScore",
"previousGrade"
]
]


y=data["finalGrade"]



X_train,X_test,y_train,y_test=train_test_split(
X,
y,
test_size=0.2
)



model=LinearRegression()


model.fit(
X_train,
y_train
)


joblib.dump(
model,
"model.pkl"
)


print("Model trained successfully")