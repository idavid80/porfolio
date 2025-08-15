# AI and Big Data Specialisation

Artificial Intelligence and Big Data Specialisation Course

## Description

This repository contains some of the lab exercises I have completed during the official Artificial Intelligence and Big Data course. The labs that do not appear in this repository are exercises carried out on platforms or tools such as AWS, Make, and Power BI.

## Dependencies

```bash
pip install pandas
pip install selenium
pip install scikit-learn
pip install matplotlib
pip install nltk
pip install seaborn
```
## Big Data Labs

### 1. Implementing an ETL flow in Python

This lab aims to understand and apply the ETL (Extract, Transform, Load) process using Python, based on a case study of a growing e-commerce business. We will learn how to manipulate data from a CSV file, transform it for analysis, and load it into an SQLite database.

#### 5. Price Prediction in Marketplaces with Cloud Computing, Web Scraping, Machine Learning, Automation, and Visualisation.

Develop an automated system for extracting and analysing prices in marketplaces. Web scraping will be used to collect product information from an online store, the data will be stored in Google Sheets, and a linear regression model will be applied to predict price trends. The entire process will be managed both locally and through cloud computing and Make automation in the cloud. The results will be visualised using a tool such as Power BI, Tableau, Airtable or similar.

[API: Bookstore](https://books.toscrape.com/)

Page structure.

![Page structure](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/images/scrapping.png)

## Artificial Intelligence Labs

### 1. Sentiment Analysis for Product Reviews Classify product reviews as positive or negative

Learn how to build a simple artificial intelligence model using Python. The goal is to classify product reviews as positive or negative, understanding the process step by step and the reason behind each action.

The results obtained are very interesting and reflect the common challenges with small datasets in sentiment analysis.

Dataset Size and Its Implications
Training: 35 samples

Test: 15 samples

This is the main factor limiting the performance of your models. With only 35 reviews to train on, the models have very little information to learn complex patterns of language and sentiment. It's like trying to learn an entire language by reading only 35 sentences.

Of the three models used in the lab, the MLP shows a much better balance between classes. Although its overall accuracy is similar to MNB, it does not have such a strong bias towards one class. It is better at identifying negatives (5 correct vs 3 for MNB and 2 for LR) but introduces some false negatives.

![Confusion Matrix](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab1/lab1_matriz.png)

![Comparison of model accuracy for sentiment classification](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab1/lab1_barras.png)

### 2. Prediction of School Dropout

The proposal is to use Machine Learning to develop a model that predicts the risk of school dropout based on historical student data, allowing schools to take preventive measures in advance.

The results of this lab indicate that with the Random Forest classification model, we obtain an overall accuracy of 64.33%. It is slightly better at predicting dropout (Class 1) in terms of accuracy (0.70) and slightly better at identifying non-dropout (Class 0) in terms of recall (0.69).

Although the accuracy for the dropout class is good, the recall of 0.60 means that the model still misses a significant percentage of students who actually drop out. This could be critical if the goal is to intervene proactively.

![Confusion Matrix](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab2/matriz.png)
![Features](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab2/caracteristicas.png)
![ROV Curve](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab2/curva%20ROC.png)

To continue with the laboratory, other models have been used, such as:

- **Grid Search**
Highest score F1 (cross-validation): 0.7025
Accuracy of the Grid Search model: 68.00%

Grid Search's classification report:

| Class              | Accuracy | Recall | F1-score | Support |
| ------------------ | -------- | ------ | -------- | ------- |
| No abandonment (0) | 0.62     | 0.74   | 0.68     | 136     |
| Abandonment (1)    | 0.75     | 0.63   | 0.68     | 164     |

**Overall Accuracy:** 0.68 (Support: 300)


### 4. Customer segmentation: k-means

The objective of this activity is to apply the K-means clustering algorithm to segment customers according to their purchasing habits and propose marketing strategies targeted at each identified segment.

**General conclusions:**

- Segment 1 (older people) is the largest and most valuable: ideal for retention and consolidation.
- Segment 2 (young people) has the highest average ticket: an excellent opportunity for future growth.
- Segment 0 represents a less committed group, ideal for reactivation or recovery strategies.

| Segment  |  Average age  | Average purchase | Annual purchases | Number of customers |
| -------- | ------------- | ---------------- | ---------------- | ------------------- |
| **0**    | 40.33 años    |  \$153.16        |  1.55            |     12 customers    |
| **1**    | 61.72 años    |  \$272.42        |  2.30            |     25 customers    |
| **2**    | 28.92 años    |  \$299.64        |  2.23            |     13 customers    |

![Elbow method](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab4/metodo_codo.png)
![silhouette score](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab4/score.png)
![2D customer segmentation](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab4/szegmentacion.png) ![3D customer segmentation](https://github.com/idavid80/Especializacion-IA-y-Big-Data/raw/main/soluciones/ia/lab4/szegmentacion3d.png)