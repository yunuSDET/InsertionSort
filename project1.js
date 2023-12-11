
/*
[22,27,16,2,18,6] -> Insertion Sort  Aşamaları:

Adım 1: [22, 27, 16, 2, 18, 6]
Adım 2: [22, 27, 16, 2, 18, 6] # 27 uygun konumuna yerleştirildi.
Adım 3: [16, 22, 27, 2, 18, 6] # 16 uygun konumuna yerleştirildi.
Adım 4: [2, 16, 22, 27, 18, 6] # 2 uygun konumuna yerleştirildi.
Adım 5: [2, 16, 18, 22, 27, 6] # 18 uygun konumuna yerleştirildi.
Adım 6: [2, 6, 16, 18, 22, 27] # 6 uygun konumuna yerleştirildi.

Big-O Gösterimi: Insertion Sort'un average, worst, ve best case senaryolarındaki zaman karmaşıklığı O(n^2)'dir.

Time Complexity:
18 sayısı için:

Best Case: O(1) - Dizi zaten sıralı.
Average Case: O(n) - Dizi içinde 18 sayısının ortada olma olasılığı.
Worst Case: O(n) - 18 sayısı dizinin sonunda.




[7,3,5,8,2,9,4,15,6] -> Selection Sort (Seçmeli Sıralama) Aşamaları (İlk 4 Adım):

Adım 1: [7, 3, 5, 8, 2, 9, 4, 15, 6]
Adım 2: [2, 3, 5, 8, 7, 9, 4, 15, 6]   # Minimum eleman 2 ile değiştirildi.
Adım 3: [2, 3, 4, 8, 7, 9, 5, 15, 6]   # Minimum eleman 4 ile değiştirildi.
Adım 4: [2, 3, 4, 5, 7, 9, 8, 15, 6]   # Minimum eleman 5 ile değiştirildi.






*/