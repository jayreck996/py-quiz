from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from questions import questions

app = FastAPI(title="py-python API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/questions")
def get_all_questions():
    return questions


@app.get("/api/questions/{level}")
def get_questions_by_level(level: str):
    filtered = [q for q in questions if q["level"].lower() == level.lower()]
    return filtered


@app.post("/api/check")
def check_answer(payload: dict):
    q_id = payload.get("id")
    user_answer = payload.get("answer", "").upper()
    question = next((q for q in questions if q["id"] == q_id), None)
    if not question:
        return {"correct": False, "error": "Question not found"}
    correct = user_answer == question["answer"]
    return {"correct": correct, "correct_answer": question["answer"]}
