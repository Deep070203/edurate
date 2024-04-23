import requests
from requests.exceptions import ConnectionError
from bs4 import BeautifulSoup


def web_content_div(web_content, class_path, value):
    count = 0
    web_content_div = web_content.find_all('div', {'class': class_path})
    textslist = []
    try:
        if value != 'None':
            for i in range(50):
                spans = web_content_div[i].find_all(value)
                texts = [span.get_text() for span in spans]
                textslist.append(texts)
        else:
            text = web_content_div[0].get_text("|", strip=True)
            text = text.split("|")
            texts = text[-1]
    except IndexError:
        texts = []

    return textslist


def college_courses():
    Error = 0
    university_names = [] 
    for i in range(1, 44):
        iS = str(i)
        url = f'https://www.collegetransfer.net/Search/Search-for-Transfer-Profiles/Transfer-Profile-Search-Results?sort=alpha&dir=up&language=en-US&perpage=50&page={iS}'

        try:
            r = requests.get(url)
            web_content = BeautifulSoup(r.text, 'lxml')

            # Price and Price Changes
            texts = web_content_div(web_content, 'tp-results__inst-name', 'strong')
            for text in texts:
                university_names.append(text[0].rstrip()[1:])
                print(text)
            # 'cal College', 'State University'
            
            
        except ConnectionError:
            print("Connection Error")
            
    with open("university_names1.txt", "w", encoding="utf-8") as file:
        for name in university_names:
            file.write(name)
        


college_courses()