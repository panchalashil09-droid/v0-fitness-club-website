"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type BMICategory = {
  range: string
  category: string
  color: string
  advice: string
}

const bmiCategories: BMICategory[] = [
  { range: "< 18.5", category: "Underweight", color: "text-blue-400", advice: "Consider a nutrition plan to gain healthy weight." },
  { range: "18.5 - 24.9", category: "Normal", color: "text-emerald-400", advice: "Great job! Maintain your healthy lifestyle." },
  { range: "25 - 29.9", category: "Overweight", color: "text-yellow-400", advice: "Consider adding more cardio to your routine." },
  { range: "≥ 30", category: "Obese", color: "text-red-400", advice: "Consult our trainers for a personalized plan." },
]

export function BMICalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<BMICategory | null>(null)

  const calculateBMI = () => {
    const h = parseFloat(height) / 100 // cm to m
    const w = parseFloat(weight)
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h)
      setBmi(parseFloat(bmiValue.toFixed(1)))
      
      if (bmiValue < 18.5) setCategory(bmiCategories[0])
      else if (bmiValue < 25) setCategory(bmiCategories[1])
      else if (bmiValue < 30) setCategory(bmiCategories[2])
      else setCategory(bmiCategories[3])
    }
  }

  const reset = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setCategory(null)
  }

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Health Tool</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Calculate Your <span className="text-primary">BMI</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Body Mass Index (BMI) is a simple calculation using your height and weight 
              that helps indicate whether you&apos;re at a healthy weight.
            </p>

            <div className="space-y-4">
              {bmiCategories.map((cat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className={`text-2xl font-bold ${cat.color} w-24`}>{cat.range}</div>
                  <div>
                    <div className={`font-semibold ${cat.color}`}>{cat.category}</div>
                    <div className="text-sm text-muted-foreground">{cat.advice}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calculator Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">BMI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="height" className="text-foreground mb-2 block">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="weight" className="text-foreground mb-2 block">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={calculateBMI}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Calculate BMI
                </Button>
                <Button
                  onClick={reset}
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted"
                >
                  Reset
                </Button>
              </div>

              {bmi !== null && category && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="text-center mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Your BMI</div>
                    <div className={`text-5xl font-bold ${category.color}`}>{bmi}</div>
                  </div>
                  <div className={`text-center font-semibold text-lg ${category.color} mb-2`}>
                    {category.category}
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-card">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{category.advice}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
