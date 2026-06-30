import { Question } from "../types";

export const mlQuestions: Question[] = [
  {
    id: "ml_1",
    text: "You are training a model on a highly imbalanced dataset (e.g., credit card fraud: 99.9% negative, 0.1% positive). Which evaluation metric should you prioritize over accuracy, and what curve is most reliable here?",
    options: [
      "Mean Absolute Error (MAE) paired with a standard ROC Curve.",
      "F1-Score and Precision-Recall (PR) Curve, because ROC can be overly optimistic when the majority class is massive.",
      "Accuracy score paired with a standard Confusion Matrix.",
      "Log-Loss calculated exclusively on the negative training samples."
    ],
    correctAnswerIndex: 1,
    explanation: "When negative samples dominate, ROC curve's False Positive Rate (FPR) remains low even with many false positives. PR curves focus on Precision and Recall, making them much more sensitive to performance changes in the minority class."
  },
  {
    id: "ml_2",
    text: "Your production click-through rate (CTR) prediction model is showing a slow drop in performance. You check the data and find that the user distribution hasn't changed, but users are reacting differently to ad categories due to a new viral trend. What type of drift is this?",
    options: [
      "Data Drift (Covariate Shift)",
      "Concept Drift",
      "Prior Probability Shift",
      "Hardware Latency Drift"
    ],
    correctAnswerIndex: 1,
    explanation: "Concept Drift occurs when the statistical properties of the target variable (how users react to ads) change over time, meaning the mapping from features X to target Y has shifted, even if the feature distribution X is stable."
  },
  {
    id: "ml_3",
    text: "When training a deep neural network with SGD, you notice the loss flatlines and gradients become extremely close to zero in early layers. What is this phenomenon and how can you mitigate it?",
    options: [
      "Exploding Gradients; mitigate by increasing the learning rate and removing dropout.",
      "Vanishing Gradients; mitigate by using ReLU/GELU activation functions, adding residual connections (He-style), and applying Batch Normalization.",
      "Dead neurons; mitigate by increasing the weight decay (L2 regularization).",
      "Overfitting; mitigate by training for 10x more epochs without validation."
    ],
    correctAnswerIndex: 1,
    explanation: "Vanishing gradients occur in deep networks using saturating activations (like sigmoid/tanh) where derivative values are small. ReLU prevents saturation for positive inputs, while batch norm and residual paths keep gradients flowing."
  },
  {
    id: "ml_4",
    text: "Why is 'Target Encoding' of high-cardinality categorical features prone to overfitting, and how do you prevent it in practice?",
    options: [
      "It makes the feature representations too large for memory. Prevent it by running PCA first.",
      "It leaks the target label into the feature space. Prevent it by adding smoothing (Bayesian shrinkage) and using out-of-fold target averages.",
      "It converts text into integers. Prevent it by using one-hot encoding instead.",
      "It ignores the majority class. Prevent it by down-sampling the target label."
    ],
    correctAnswerIndex: 1,
    explanation: "Target encoding replaces categories with target averages. In small categories, this heavily leaks the target. Smoothing shifts tiny category averages toward global averages, and out-of-fold calculations prevent target leakage during training."
  },
  {
    id: "ml_5",
    text: "Under what scenario would you choose L1 regularization (Lasso) over L2 regularization (Ridge)?",
    options: [
      "When you have fewer features than samples and want to maximize collinearity.",
      "When you expect most features to be useful and want to distribute weights evenly.",
      "When you want a sparse model where unimportant feature weights are forced to exactly zero, effectively performing feature selection.",
      "When you are training non-parametric decision trees with high depth."
    ],
    correctAnswerIndex: 2,
    explanation: "L1 regularization adds an absolute weight penalty, which drives less predictive feature weights to exactly zero. L2 adds a squared penalty which shrinks weights toward zero but never makes them exactly zero."
  },
  {
    id: "ml_6",
    text: "What is the primary role of a 'Feature Store' (e.g., Feast, Tecton) in a production MLOps pipeline?",
    options: [
      "To store raw PDF files before they are read by humans.",
      "To serve as a central repository for sharing, standardizing, and serving features consistently between offline training and online low-latency inference.",
      "To compress deep learning model files into ZIP folders.",
      "To automate the hyperparameter search of XGBoost models."
    ],
    correctAnswerIndex: 1,
    explanation: "Feature Stores prevent 'training-serving skew' by providing a unified pipeline where features are calculated once and served offline (for fast batch training) and online (via low-latency key-value stores for inference)."
  },
  {
    id: "ml_7",
    text: "In XGBoost, what does the 'colsample_bytree' hyperparameter control, and what is its primary effect?",
    options: [
      "It controls the fraction of samples used for each tree; it reduces bias.",
      "It controls the fraction of columns (features) subsampled when constructing each tree; it helps prevent overfitting and speeds up training.",
      "It sets the maximum number of decision nodes per tree branch.",
      "It determines the learning rate scaling factor for gradient descent."
    ],
    correctAnswerIndex: 1,
    explanation: "`colsample_bytree` is a regularization hyperparameter that subsamples features for each tree. This injects randomness (similar to Random Forest feature bagging) and prevents a few highly dominant features from dictating every split."
  },
  {
    id: "ml_8",
    text: "You are designing a recommendation system. Why is 'Collaborative Filtering' susceptible to the 'Cold Start' problem, and how is it typically solved?",
    options: [
      "It requires cold liquid cooling for servers. Solved by renting high-end GPU clusters.",
      "It cannot recommend items to new users or recommend new items with no interactions. Solved by using content-based features in a hybrid recommendation model.",
      "It fails when database queries take longer than 50ms. Solved by implementing Redis cache.",
      "It is mathematically impossible to calculate matrix factorization. Solved by using linear regression."
    ],
    correctAnswerIndex: 1,
    explanation: "Collaborative filtering relies solely on user-item interaction matrices. New items/users have no history (cold), making similarity calculations impossible. Hybrid models combine metadata (genre, user age, etc.) to seed early scores."
  },
  {
    id: "ml_9",
    text: "What is the core difference between 'K-Means' and 'DBSCAN' clustering algorithms?",
    options: [
      "K-Means is supervised, while DBSCAN is unsupervised.",
      "K-Means requires specifying the number of clusters 'K' beforehand and assumes spherical clusters; DBSCAN finds clusters of arbitrary shapes based on local density and detects noise.",
      "K-Means is exclusively used for image recognition; DBSCAN is for text.",
      "DBSCAN only works on 1D arrays, while K-Means works on high-dimensional vectors."
    ],
    correctAnswerIndex: 1,
    explanation: "K-Means divides space based on centroids, assuming convex/spherical clusters. DBSCAN looks for contiguous dense regions. It doesn't need 'k' specified and easily identifies isolated low-density points as outliers/noise."
  },
  {
    id: "ml_10",
    text: "In neural network architectures, what is the mathematical purpose of the 'Softmax' activation function in the output layer of a multi-class classifier?",
    options: [
      "It scales values to be between -1 and 1 to prevent vanishing gradients.",
      "It converts raw model outputs (logits) into a probability distribution where all values are positive and sum to 1.",
      "It zeroes out negative weights to make the final inference faster.",
      "It performs linear interpolation between adjacent layer inputs."
    ],
    correctAnswerIndex: 1,
    explanation: "Softmax exponentiates logits and divides each by the sum of all exponentiated logits. This translates raw scores into relative ratios representing a valid probability distribution (0 to 1, summing to 1)."
  },
  {
    id: "ml_11",
    text: "What is 'Data Leakage' in machine learning, and which of the following is a classic example of it during preprocessing?",
    options: [
      "Confidential customer details being leaked to hackers. An example is storing passwords in plaintext.",
      "Information from outside the training dataset being used to train the model. An example is scaling features (e.g., using fit_transform) on the entire dataset before splitting into train/test sets.",
      "Model weights becoming public. An example is exporting a pickle file to GitHub.",
      "GPU memory overflowing during training. An example is setting batch sizes too large."
    ],
    correctAnswerIndex: 1,
    explanation: "Applying transformers (like standard scalers or target imputers) on the entire dataset leaks information from the test split (like the test set's mean/variance) into the training process, causing overly optimistic validation scores."
  },
  {
    id: "ml_12",
    text: "What does the 'Receiver Operating Characteristic' (ROC) curve plot, and what does an AUC score of 0.5 mean?",
    options: [
      "Plots Precision vs. Recall; AUC 0.5 means a perfect classifier.",
      "Plots True Positive Rate vs. False Positive Rate; AUC 0.5 represents a model with performance no better than random guessing.",
      "Plots Training Loss vs. Validation Loss; AUC 0.5 means the model is overfitting.",
      "Plots Learning Rate vs. Convergence Speed; AUC 0.5 indicates maximum model depth."
    ],
    correctAnswerIndex: 1,
    explanation: "ROC curves plot TPR (y-axis) against FPR (x-axis) across all classification thresholds. An Area Under Curve (AUC) of 0.5 means the model is as good as flipping a coin to distinguish between positive and negative classes."
  },
  {
    id: "ml_13",
    text: "Why is 'Mini-Batch Gradient Descent' preferred over both 'Stochastic Gradient Descent (SGD with batch size 1)' and 'Batch Gradient Descent (entire dataset)'?",
    options: [
      "It requires no hyperparameter tuning whatsoever.",
      "It balances computation efficiency (vectorization on modern hardware like GPUs) and optimization path stability (averaging gradients to reduce variance).",
      "It guarantees finding the absolute global minimum for any non-convex loss function.",
      "It is the only method that supports categorical features natively."
    ],
    correctAnswerIndex: 1,
    explanation: "Batch gradient descent is too slow and memory-intensive for large datasets. Single-sample SGD is highly erratic. Mini-batching uses modern parallel GPU matrices while averaging small groups to make steady optimization steps."
  },
  {
    id: "ml_14",
    text: "When training a model, you observe a low training error but a very high validation/test error. What does this signify and how do you fix it?",
    options: [
      "High bias (underfitting). Fix by simplifying the model and removing features.",
      "High variance (overfitting). Fix by adding regularization, gathering more data, pruning trees, or applying dropout.",
      "A database error. Fix by restarting the training cluster.",
      "Optimal performance. No changes are required."
    ],
    correctAnswerIndex: 1,
    explanation: "Low training error but high test error means the model has learned the training noise rather than the underlying pattern (overfitting/high variance). Fixing this requires regularization or expanding training data."
  },
  {
    id: "ml_15",
    text: "What is 'SHAP' (SHapley Additive exPlanations) used for in machine learning pipelines?",
    options: [
      "To compress high-dimensional image inputs before feeding them to CNNs.",
      "To provide local and global model-agnostic feature importance based on game theory, showing how much each feature contributed to a specific prediction.",
      "To schedule learning rate decays during deep learning epochs.",
      "To encrypt model weights for secure cloud storage."
    ],
    correctAnswerIndex: 1,
    explanation: "SHAP calculates Shapley values from game theory. It explains individual model predictions by distributing the payout (prediction difference from average) among the players (input features) in a fair, additive manner."
  },
  {
    id: "ml_16",
    text: "In tree-based algorithms like Random Forest, why is the 'Out-Of-Bag' (OOB) error useful?",
    options: [
      "It measures model performance on samples that were never used to train that specific decision tree, providing a built-in validation metric without needing a separate split.",
      "It measures how much disk space is saved by pruning unused branches.",
      "It calculates the rate of missing values in the dataset.",
      "It evaluates how well the trees are distributed across different physical CPUs."
    ],
    correctAnswerIndex: 0,
    explanation: "Random Forest builds trees on bootstrapped samples. Each tree leaves out roughly 36.8% of the data (out-of-bag). Evaluating each sample on the trees where it was OOB provides a highly unbiased validation estimate."
  },
  {
    id: "ml_17",
    text: "What is 'Precision-Recall Tradeoff' and how does changing the decision threshold affect it?",
    options: [
      "As precision increases, recall always increases; raising the threshold increases both.",
      "Raising the decision threshold increases Precision (fewer false positives) but lowers Recall (more false negatives). Lowering the threshold does the opposite.",
      "The tradeoff is only relevant in unsupervised clustering.",
      "The tradeoff is eliminated by using larger GPU batch sizes."
    ],
    correctAnswerIndex: 1,
    explanation: "Raising the threshold makes the classifier more selective. This reduces False Positives (higher Precision), but also makes it miss harder positive cases, raising False Negatives (lower Recall)."
  },
  {
    id: "ml_18",
    text: "What is the primary benefit of 'Layer Normalization' over 'Batch Normalization' in transformer-based NLP models?",
    options: [
      "Layer Normalization trains models twice as fast.",
      "Layer Normalization computes statistics across features within a single sample, making it independent of batch size and ideal for variable-length sequence data.",
      "Layer Normalization eliminates the need for activation functions.",
      "Layer Normalization is computed on the database level before training begins."
    ],
    correctAnswerIndex: 1,
    explanation: "Batch Norm depends on batch statistics, which fail for small batch sizes or variable sequence lengths in NLP. Layer Norm normalizes across the feature dimension for each individual sample, rendering it completely batch-independent."
  },
  {
    id: "ml_19",
    text: "You are training a Deep Learning model on a single GPU. You decide to use 'Mixed Precision Training' (FP16/FP32). What is the main benefit and a common risk?",
    options: [
      "Benefit: removes bias. Risk: model becomes twice as heavy on disk.",
      "Benefit: faster computation and lower GPU memory usage. Risk: underflow errors where tiny gradients are rounded to zero, requiring loss scaling.",
      "Benefit: automatically cleans bad data labels. Risk: cannot run on NVIDIA chips.",
      "Benefit: eliminates the need for validation splits. Risk: slower training speeds."
    ],
    correctAnswerIndex: 1,
    explanation: "Mixed precision uses FP16 for math operations (2x speed, half memory) but keeps master weights in FP32. Tiny FP16 gradients can suffer arithmetic underflow (become zero); loss scaling prevents this by multiplying gradients during backpropagation."
  },
  {
    id: "ml_20",
    text: "In MLOps, what does 'Concept Drift' specifically require as a remediation step?",
    options: [
      "Re-scaling the dataset with a different min-max boundary.",
      "Re-training the model on newly collected ground-truth data, or shifting the labels timeline, as the relationships in the data have physically changed.",
      "Restarting the web server to clear cached index arrays.",
      "Scaling up the virtual machine to add more RAM."
    ],
    correctAnswerIndex: 1,
    explanation: "Since concept drift means the actual relationship between features X and target Y has shifted, old training data is no longer valid. The only real solution is to collect fresh, annotated data and completely re-train the model."
  }
];
