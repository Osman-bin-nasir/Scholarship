import pandas as pd

df = pd.read_excel(r"C:\Users\Rahmathullah\Desktop\scholarshipdatabase.xlsx")


def search_scholarship(df, categories, location, university):
    df1 = df[df['Location'].str.lower() == location.lower()]
    df2 = df1[df1['University'].str.lower() == university.lower()]
    df3 = df2[df2['Scholarship_type'].str.lower() == categories.lower()]
    if len(df3) == 0:
        result = "no results found for your search"
    else:
        result = ",".join(df3["Scholaryship_grant_name"].tolist())
    return result


categories, location, university = input("categories, location, university: ").split(',')
result = search_scholarship(df, categories, location, university)
print(result)
