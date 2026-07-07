const NIVEAUX = [
  {
    "id": "1ere-ing",
    "label": "1ère Année Ingénieur",
    "cycle": "Ingénieur",
    "semesters": [
      {
        "num": 1,
        "matiere": "pdfs/1ere-ing/s1-matiere.pdf",
        "unite": "pdfs/1ere-ing/s1-unite.pdf"
      },
      {
        "num": 2,
        "matiere": "pdfs/1ere-ing/s2-matiere.pdf",
        "unite": "pdfs/1ere-ing/s2-unite.pdf"
      }
    ],
    "globale": "pdfs/1ere-ing/globale.pdf"
  },
  {
    "id": "2eme-ing",
    "label": "2ème Année Ingénieur",
    "cycle": "Ingénieur",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/2eme-ing/s3-matiere.pdf",
        "unite": "pdfs/2eme-ing/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/2eme-ing/s4-matiere.pdf",
        "unite": "pdfs/2eme-ing/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/2eme-ing/globale.pdf"
  },
  {
    "id": "3eme-ing",
    "label": "3ème Année Ingénieur",
    "cycle": "Ingénieur",
    "semesters": [
      {
        "num": 5,
        "matiere": "pdfs/3eme-ing/s5-matiere.pdf",
        "unite": "pdfs/3eme-ing/s5-unite.pdf"
      },
      {
        "num": 6,
        "matiere": "pdfs/3eme-ing/s6-matiere.pdf",
        "unite": "pdfs/3eme-ing/s6-unite.pdf"
      }
    ],
    "globale": "pdfs/3eme-ing/globale.pdf"
  },
  {
    "id": "l1-automobile",
    "label": "L1 Automobile",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 1,
        "matiere": "pdfs/l1-automobile/s1-matiere.pdf",
        "unite": "pdfs/l1-automobile/s1-unite.pdf"
      },
      {
        "num": 2,
        "matiere": "pdfs/l1-automobile/s2-matiere.pdf",
        "unite": "pdfs/l1-automobile/s2-unite.pdf"
      }
    ],
    "globale": "pdfs/l1-automobile/globale.pdf"
  },
  {
    "id": "l2-aut",
    "label": "L2 Automobile (Aut)",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/l2-aut/s3-matiere.pdf",
        "unite": "pdfs/l2-aut/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/l2-aut/s4-matiere.pdf",
        "unite": "pdfs/l2-aut/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/l2-aut/globale.pdf"
  },
  {
    "id": "l2-automobile",
    "label": "L2 Automobile",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/l2-automobile/s3-matiere.pdf",
        "unite": "pdfs/l2-automobile/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/l2-automobile/s4-matiere.pdf",
        "unite": "pdfs/l2-automobile/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/l2-automobile/globale.pdf"
  },
  {
    "id": "l2-elm",
    "label": "L2 Électromécanique",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/l2-elm/s3-matiere.pdf",
        "unite": "pdfs/l2-elm/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/l2-elm/s4-matiere.pdf",
        "unite": "pdfs/l2-elm/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/l2-elm/globale.pdf"
  },
  {
    "id": "l2-elt",
    "label": "L2 Électrotechnique",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/l2-elt/s3-matiere.pdf",
        "unite": "pdfs/l2-elt/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/l2-elt/s4-matiere.pdf",
        "unite": "pdfs/l2-elt/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/l2-elt/globale.pdf"
  },
  {
    "id": "l3-aut",
    "label": "L3 Automobile",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 5,
        "matiere": "pdfs/l3-aut/s5-matiere.pdf",
        "unite": "pdfs/l3-aut/s5-unite.pdf"
      },
      {
        "num": 6,
        "matiere": "pdfs/l3-aut/s6-matiere.pdf",
        "unite": "pdfs/l3-aut/s6-unite.pdf"
      }
    ],
    "globale": "pdfs/l3-aut/globale.pdf"
  },
  {
    "id": "l3-elm",
    "label": "L3 Électromécanique",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 5,
        "matiere": "pdfs/l3-elm/s5-matiere.pdf",
        "unite": "pdfs/l3-elm/s5-unite.pdf"
      },
      {
        "num": 6,
        "matiere": "pdfs/l3-elm/s6-matiere.pdf",
        "unite": "pdfs/l3-elm/s6-unite.pdf"
      }
    ],
    "globale": "pdfs/l3-elm/globale.pdf"
  },
  {
    "id": "l3-elt",
    "label": "L3 Électrotechnique",
    "cycle": "Licence",
    "semesters": [
      {
        "num": 5,
        "matiere": "pdfs/l3-elt/s5-matiere.pdf",
        "unite": "pdfs/l3-elt/s5-unite.pdf"
      },
      {
        "num": 6,
        "matiere": "pdfs/l3-elt/s6-matiere.pdf",
        "unite": "pdfs/l3-elt/s6-unite.pdf"
      }
    ],
    "globale": "pdfs/l3-elt/globale.pdf"
  },
  {
    "id": "m1-aut",
    "label": "M1 Automobile",
    "cycle": "Master",
    "semesters": [
      {
        "num": 1,
        "matiere": "pdfs/m1-aut/s1-matiere.pdf",
        "unite": "pdfs/m1-aut/s1-unite.pdf"
      },
      {
        "num": 2,
        "matiere": "pdfs/m1-aut/s2-matiere.pdf",
        "unite": "pdfs/m1-aut/s2-unite.pdf"
      }
    ],
    "globale": "pdfs/m1-aut/globale.pdf"
  },
  {
    "id": "m1-cmd",
    "label": "M1 Commande Électrique",
    "cycle": "Master",
    "semesters": [
      {
        "num": 1,
        "matiere": "pdfs/m1-cmd/s1-matiere.pdf",
        "unite": "pdfs/m1-cmd/s1-unite.pdf"
      },
      {
        "num": 2,
        "matiere": "pdfs/m1-cmd/s2-matiere.pdf",
        "unite": "pdfs/m1-cmd/s2-unite.pdf"
      }
    ],
    "globale": "pdfs/m1-cmd/globale.pdf"
  },
  {
    "id": "m1-elm",
    "label": "M1 Électromécanique",
    "cycle": "Master",
    "semesters": [
      {
        "num": 1,
        "matiere": "pdfs/m1-elm/s1-matiere.pdf",
        "unite": "pdfs/m1-elm/s1-unite.pdf"
      },
      {
        "num": 2,
        "matiere": "pdfs/m1-elm/s2-matiere.pdf",
        "unite": "pdfs/m1-elm/s2-unite.pdf"
      }
    ],
    "globale": "pdfs/m1-elm/globale.pdf"
  },
  {
    "id": "m1-er",
    "label": "M1 Énergies Renouvelables",
    "cycle": "Master",
    "semesters": [
      {
        "num": 1,
        "matiere": "pdfs/m1-er/s1-matiere.pdf",
        "unite": "pdfs/m1-er/s1-unite.pdf"
      },
      {
        "num": 2,
        "matiere": "pdfs/m1-er/s2-matiere.pdf",
        "unite": "pdfs/m1-er/s2-unite.pdf"
      }
    ],
    "globale": "pdfs/m1-er/globale.pdf"
  },
  {
    "id": "m2-aut",
    "label": "M2 Automobile",
    "cycle": "Master",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/m2-aut/s3-matiere.pdf",
        "unite": "pdfs/m2-aut/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/m2-aut/s4-matiere.pdf",
        "unite": "pdfs/m2-aut/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/m2-aut/globale.pdf"
  },
  {
    "id": "m2-cmd",
    "label": "M2 Commande Électrique",
    "cycle": "Master",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/m2-cmd/s3-matiere.pdf",
        "unite": "pdfs/m2-cmd/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/m2-cmd/s4-matiere.pdf",
        "unite": "pdfs/m2-cmd/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/m2-cmd/globale.pdf"
  },
  {
    "id": "m2-elm",
    "label": "M2 Électromécanique",
    "cycle": "Master",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/m2-elm/s3-matiere.pdf",
        "unite": "pdfs/m2-elm/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/m2-elm/s4-matiere.pdf",
        "unite": "pdfs/m2-elm/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/m2-elm/globale.pdf"
  },
  {
    "id": "m2-er",
    "label": "M2 Énergies Renouvelables",
    "cycle": "Master",
    "semesters": [
      {
        "num": 3,
        "matiere": "pdfs/m2-er/s3-matiere.pdf",
        "unite": "pdfs/m2-er/s3-unite.pdf"
      },
      {
        "num": 4,
        "matiere": "pdfs/m2-er/s4-matiere.pdf",
        "unite": "pdfs/m2-er/s4-unite.pdf"
      }
    ],
    "globale": "pdfs/m2-er/globale.pdf"
  }
];
