import cohere
import time

def generate_reel_content(ppt_content):
    co = cohere.Client("OQt9Xru2qok3Wp5xIcHIogIPhvbwCTHavw0PVq6Q")

    documents = []
    for slide in ppt_content:
        documents.append({"title": "PowerPoint", "snippet": slide})
    start_time = time.time()
    prompt = "I am providing you with the slides of a powerpoint that discuss a topic. Each slide contains various information, however, some slides discuss the same topic. For example, for a powerpoint that discusses Earthquakes, slides 1-7 may talk about the epicentre of earthquakes, slides 8-11 may talk about historical earthquakes, and so on. I need you to take in this data, and return to me a list that contains each major topic discussed in the powerpoint along with a paragraph that summarizes the information about that topic. For example, for the earthquake powerpoint discussed earlier, for the topic: Epicentre, I would like a paragraph that summarizes the slides 1-7 in a playful manner for a younger child to understand. May you please return the topics along with their paragraph summary in a list of tuples, where the first index of the tuple is the topic name, such as epicentre, and the second index is the paragraph summary. You should return the data so that the topic that matches with its summary paragraph is separated by the others with $ as a delimiter. For example, you should return: topic 1 + summary 1 $ topic 2 + summary 2 $ topic 3 + summary 3, etc."
    generate = co.chat(
        model="command-nightly",
        message=prompt,
        documents=documents
    )
    print("Time taken: ", time.time()-start_time)
    return generate.text