1. LLaMA2-13B-Chat-GPTQ model should be downloaded.

2. Install packages to the conda environment by running the code:
```
conda create --name token-vis python=3.12
conda activate token-vis
pip install torch numpy transformers ipykernel spacy
python -m spacy download en_core_web_sm
python -m ipykernel install --user --name=token-vis
```

3. Select the ipykernel `token-vis` as the kernel to run `vis.ipynb` file

4. Set MODEL_DIR in the first cell and RESULTS_DIR in the second cell to the correct values

5. `score_type` and `mkt_scale` can be changed depending on what score we want to visualize and the lightness of colors