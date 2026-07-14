import joblib


model=joblib.load("model.pkl")


def predict(data):

    result=model.predict([data])

    return result[0]