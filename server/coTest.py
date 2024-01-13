import cohere
co = cohere.Client("OQt9Xru2qok3Wp5xIcHIogIPhvbwCTHavw0PVq6Q")
import json
import asyncio

#content is 2d array of strings
#outputs string of content followed by list of documents
async def grabTopics(content):
    documents = []
    for j in content[1]:
        documents.append({"title": content[0], "snippet": j})
    generate = co.chat(
        model="command",
        message="Strictly give me a list of the topics covered in " + content[0] + " in the form of ['content1','content2'] and no other format.",
        documents=documents
    )
    dirty = generate.text.replace("```", "").replace("json", "")
    return json.loads(dirty)

async def genContent(topic,content):
    documents = []
    for j in content[1]:
        documents.append({"title": content[0], "snippet": j})
    generate = co.chat(
        model="command",
        message="Teach me about " + topic + " from "+ content[0] + "in an interesting , engaging, and fun way such that a teenager can understand it.",
        documents=documents
    )
    output = generate.text
    if output.startswith("Sure thing"):
        output = output[len("Sure thing")+2:]
        
    if output.startswith("Sure"):
        output = output[len("Sure")+2:]

    suffixes = ["Please let me", "Would you like"]
    for suffix in suffixes:
        if suffix in output:
            output = output.split(suffix, 1)[0].rstrip()

    return output,generate.documents

def howToJacky():
    return co.chat(
        model="command",
        message="how do i prompt LLMs such that it will not return something like 'Sure thing! .... Let me know if you have further questions'. how can i improve this prompt? Teach me about [topic] in an interesting , engaging, and fun way such that a teenager can understand it. No need for further questions or clarifications.")


testContent = ["Lecture 1",["Earth Quakes They result from the rupture of rocks along a fault. Energy from an earthquake is released in the form of seismic waves. They are mapped according to the epicentre; the focus is located directly below the epicentre. They are measured by seismographs and compared by magnitude.","Earthquake Magnitude The magnitude of an earthquake is expressed as a number to one decimal place. This type of measurement was first developed by seismologist Charles Richter in 1935 The Richter Scale was a measure of the strength of a wave 100 km from the epicentre. Since then, more accurate methods have been developed and the Richter Scale is no longer in use"]]
# print(genContent(testContent))
# print(grabTopics(testContent))
topics = grabTopics(testContent)
for topic in topics:
    print(genContent(topic,testContent)[0])
# print(howToJacky().text)