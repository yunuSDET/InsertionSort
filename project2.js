/*
[16,21,11,8,12,22] -> Merge Sort Aşamaları:

Adım 1: [16, 21, 11, 8, 12, 22]
Adım 2: [16, 21, 11] [8, 12, 22]   # Dizi ikiye bölündü
Adım 3: [16] [21, 11] [8] [12, 22]  # Dizi ikiye bölündü
Adım 4: [16] [11, 21] [8] [12, 22]  # Alt diziler sıralandı
Adım 5: [11, 16, 21] [8, 12, 22]     # Alt diziler birleştirildi
Adım 6: [8, 11, 12, 16, 21, 22]      # Tüm dizi birleştirildi


Big-O Gösterimi: Merge Sort'un average, worst, ve best case senaryolarındaki zaman karmaşıklığı O(n log n)'dir.




*/
