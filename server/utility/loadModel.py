from langchain_huggingface import HuggingFaceEmbeddings
from langchain_postgres import PGVector

embeddings = None
vector_store = None

def get_vector_store():
    global embeddings, vector_store

    if vector_store is None:
        print("⚠️ Loading embeddings model... (first time only)")

        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
        vector_store = PGVector(
            embeddings=embeddings,
            collection_name="my_docs",
            connection="postgresql+psycopg://postgres:2001@localhost:5432/postgres"
        )
    return vector_store