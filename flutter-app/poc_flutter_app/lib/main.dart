import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PoC Flutter', // Título de la app en la multitarea
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blueAccent),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'App Flutter - PoC'), // Título en la AppBar
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  // Ya no necesitamos la lógica del contador

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        // Centra el contenido
        child: Padding(
          // Añade padding alrededor
          padding: const EdgeInsets.all(24.0),
          child: Column(
            // Organiza Widgets verticalmente
            mainAxisAlignment:
                MainAxisAlignment.center, // Centra verticalmente en la columna
            children: <Widget>[
              Icon(
                // Añade un icono
                Icons.phone_android,
                size: 60,
                color: Theme.of(context).colorScheme.primary,
              ),
              const SizedBox(height: 20), // Espacio vertical
              const Text(
                '¡Bienvenido/a a la App Flutter!',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10), // Espacio vertical
              const Text(
                'Este es un ejemplo básico de contenido estático para la Prueba de Concepto (PoC) dentro del monorepo.',
                style: TextStyle(fontSize: 16),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 30),
              ElevatedButton.icon(
                // Un botón con icono
                icon: const Icon(Icons.info_outline),
                label: const Text('Más Información (Simulado)'),
                onPressed: () {
                  // Acción simple al pulsar el botón
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Has pulsado el botón de información.'),
                      duration: Duration(seconds: 2),
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
