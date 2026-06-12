import{a as e,c as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,o as l,p as u,r as d,s as f,t as p,v as m}from"./index-BtkzsJtm.js";var h={class:`playground-page`},g={class:`page-header`},_={class:`header-actions`},v=[`disabled`],y={class:`playground-content`},b={class:`editor-panel`},x={class:`editor-tabs`},S={class:`editor-body`},C={class:`line-numbers`},w=[`onKeydown`],T={class:`output-panel`},E={class:`output-header`},D={class:`output-body`},O=p({__name:`Playground`,setup(p){let O=a(`# Welcome to AILab Playground!
# Real Python execution in your browser via Pyodide
# Try running this code:

import sys
print(f"Python version: {sys.version}")
print()

# Simple computation
def fibonacci(n):
    """Generate Fibonacci sequence"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

fib = fibonacci(15)
print(f"First 15 Fibonacci numbers: {fib}")
print()

# List comprehension
squares = [x**2 for x in range(1, 11)]
print(f"Squares of 1-10: {squares}")
print()

# Dictionary
word_freq = {}
text = "the quick brown fox jumps over the lazy dog the fox"
for word in text.split():
    word_freq[word] = word_freq.get(word, 0) + 1

print("Word frequencies:")
for word, count in sorted(word_freq.items(), key=lambda x: -x[1]):
    print(f"  {word}: {count}")
`),k=a(``),A=a(!1),j=a(!1),M=a(!1),N=null,P=f(()=>O.value.split(`
`).length),F={hello:`# Hello World
print("Hello from AILab! 🚀")
print(f"Python is running in your browser!")

# Variables
name = "World"
print(f"Hello, {name}!")

# Loop
for i in range(5):
    print(f"  Step {i + 1}: Processing...")`,math:`# Mathematical Operations
import math

# Prime numbers
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0: return False
    return True

primes = [x for x in range(2, 50) if is_prime(x)]
print(f"Primes under 50: {primes}")

# Matrix multiplication
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
C = [[sum(a*b for a,b in zip(row, col)) for col in zip(*B)] for row in A]
print(f"\\nMatrix A × B = {C}")

# Statistics
data = [23, 45, 12, 67, 34, 89, 21, 56, 78, 43]
mean = sum(data) / len(data)
variance = sum((x - mean)**2 for x in data) / len(data)
std = math.sqrt(variance)
print(f"\\nData: {data}")
print(f"Mean: {mean:.1f}")
print(f"Std Dev: {std:.1f}")`,data:`# Data Processing
from collections import Counter, defaultdict

# Sample dataset
students = [
    {"name": "Alice", "grade": 92, "subject": "Math"},
    {"name": "Bob", "grade": 85, "subject": "English"},
    {"name": "Charlie", "grade": 78, "subject": "Math"},
    {"name": "Diana", "grade": 95, "subject": "English"},
    {"name": "Eve", "grade": 88, "subject": "Math"},
    {"name": "Frank", "grade": 72, "subject": "English"},
]

# Group by subject
by_subject = defaultdict(list)
for s in students:
    by_subject[s["subject"]].append(s)

print("=== Grade Report ===")
for subject, group in by_subject.items():
    avg = sum(s["grade"] for s in group) / len(group)
    best = max(group, key=lambda s: s["grade"])
    print(f"\\n{subject}:")
    print(f"  Average: {avg:.1f}")
    print(f"  Best: {best['name']} ({best['grade']})")
    print(f"  Students: {len(group)}")

# Sort all by grade
print("\\n=== Leaderboard ===")
for i, s in enumerate(sorted(students, key=lambda x: -x["grade"]), 1):
    bar = "█" * (s["grade"] // 5)
    print(f"  {i}. {s['name']:10} {bar} {s['grade']}")`,ai:`# Simple AI: Naive Bayes Classifier
# (No external libraries needed!)

import math
from collections import defaultdict

# Training data: (text, label)
train_data = [
    ("I love this movie amazing", "positive"),
    ("great film wonderful acting", "positive"),
    ("best movie I have ever seen", "positive"),
    ("beautiful story and visuals", "positive"),
    ("terrible movie waste of time", "negative"),
    ("bad acting boring plot", "negative"),
    ("worst film I have seen", "negative"),
    ("awful story horrible acting", "negative"),
]

# Train Naive Bayes
class NaiveBayes:
    def __init__(self):
        self.word_counts = defaultdict(lambda: defaultdict(int))
        self.class_counts = defaultdict(int)
        self.vocab = set()
    
    def train(self, data):
        for text, label in data:
            self.class_counts[label] += 1
            for word in text.lower().split():
                self.word_counts[label][word] += 1
                self.vocab.add(word)
    
    def predict(self, text):
        scores = {}
        total_docs = sum(self.class_counts.values())
        for label in self.class_counts:
            score = math.log(self.class_counts[label] / total_docs)
            total_words = sum(self.word_counts[label].values())
            for word in text.lower().split():
                count = self.word_counts[label].get(word, 0)
                score += math.log((count + 1) / (total_words + len(self.vocab)))
            scores[label] = score
        return max(scores, key=scores.get)

# Train and test
model = NaiveBayes()
model.train(train_data)

print("=== Naive Bayes Classifier ===")
print(f"Training samples: {len(train_data)}")
print(f"Vocabulary size: {len(model.vocab)}")

test_sentences = [
    "I love this amazing film",
    "terrible boring movie",
    "wonderful beautiful story",
    "bad worst horrible",
]

print("\\nPredictions:")
for sentence in test_sentences:
    pred = model.predict(sentence)
    emoji = "😊" if pred == "positive" else "😞"
    print(f"  '{sentence}' → {emoji} {pred}")`};function I(e){O.value=F[e]||``}function L(e){let t=e.target.selectionStart,n=e.target.selectionEnd;O.value=O.value.substring(0,t)+`  `+O.value.substring(n),setTimeout(()=>{e.target.selectionStart=e.target.selectionEnd=t+2},0)}async function R(){k.value=`Loading Python runtime (Pyodide)...
This may take a moment on first load.`;try{let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js`,document.head.appendChild(e),await new Promise((t,n)=>{e.onload=t,e.onerror=n}),N=await loadPyodide({indexURL:`https://cdn.jsdelivr.net/pyodide/v0.24.1/full/`}),j.value=!0,k.value=`✅ Python ready! Click "Run" to execute code.`}catch(e){k.value=`❌ Failed to load Python: ${e.message}`,M.value=!0}}async function z(){if(!(!N||A.value)){A.value=!0,M.value=!1,k.value=``;try{N.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`),N.runPython(O.value);let e=N.runPython(`sys.stdout.getvalue()`),t=N.runPython(`sys.stderr.getvalue()`);t?(k.value=t,M.value=!0):k.value=e||`(no output)`}catch(e){k.value=e.message,M.value=!0}finally{A.value=!1}}}return n(()=>{R()}),(n,a)=>(r(),s(`div`,h,[t(`header`,g,[a[6]||=t(`div`,null,[t(`h1`,null,`Playground`),t(`p`,null,`Real Python execution in your browser (via Pyodide)`)],-1),t(`div`,_,[t(`span`,{class:i([`kernel-status`,j.value?`ready`:`loading`])},m(j.value?`🟢 Python Ready`:`🟡 Loading Python...`),3),t(`button`,{class:`btn btn-primary`,onClick:z,disabled:!j.value||A.value},m(A.value?`⏳ Running...`:`▶ Run`),9,v)])]),t(`div`,y,[t(`div`,b,[t(`div`,x,[a[7]||=t(`span`,{class:`tab active`},`main.py`,-1),t(`button`,{class:`btn btn-ghost btn-sm`,onClick:a[0]||=e=>I(`hello`)},`Hello`),t(`button`,{class:`btn btn-ghost btn-sm`,onClick:a[1]||=e=>I(`math`)},`Math`),t(`button`,{class:`btn btn-ghost btn-sm`,onClick:a[2]||=e=>I(`data`)},`Data`),t(`button`,{class:`btn btn-ghost btn-sm`,onClick:a[3]||=e=>I(`ai`)},`AI`)]),t(`div`,S,[t(`div`,C,[(r(!0),s(l,null,u(P.value,e=>(r(),s(`span`,{key:e},m(e),1))),128))]),c(t(`textarea`,{"onUpdate:modelValue":a[4]||=e=>O.value=e,class:`code-editor`,spellcheck:`false`,onKeydown:o(e(L,[`prevent`]),[`tab`]),ref:`editorRef`},null,40,w),[[d,O.value]])])]),t(`div`,T,[t(`div`,E,[a[8]||=t(`span`,{class:`output-title`},`Output`,-1),t(`button`,{class:`btn btn-ghost btn-sm`,onClick:a[5]||=e=>k.value=``},`Clear`)]),t(`div`,D,[t(`pre`,{class:i([`output-text`,{error:M.value}])},m(k.value||`Click "Run" to execute your code...`),3)])])])]))}},[[`__scopeId`,`data-v-ca2947fa`]]);export{O as default};