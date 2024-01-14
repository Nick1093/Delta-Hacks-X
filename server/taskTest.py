import cohere

api = cohere.Client("Wm65Xm16zFlPvB54wXEb83FsZyYXiJAEzz3UDZFQ")

def grabTasks(content):
    documents = []

    for slide in content:
        documents.append({"title": "ppt", "snippet": slide})
    
    generate = api.chat(
        model="command-nightly",
        message="Strictly give me a moderately challenging list consisting of 3 to 5 tasks based on the powerpoint content I will provide for you. These tasks should guide a student in effectively studying and understanding a new academic topic or reviewing content related to the following material. Give them to me in the form of ['task1','task2'] and no other format.",
        documents=documents
    )

    print(generate.text)

    strip_1 = generate.text.strip("[]")

    tasks = strip_1.split(',')
    
    tasks = [task.strip().strip("'") for task in tasks]
    return tasks